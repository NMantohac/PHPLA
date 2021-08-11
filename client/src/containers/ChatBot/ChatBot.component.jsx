import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import './ChatBot.styles.css';

const ChatBotAvatar = require('./ChatBotAvatar.png');

const theme = {
  background: '#f5f8fb',
  // fontFamily: 'Helvetica Neue',
  headerBgColor: '#fe6902',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#fe6902',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

const config = {
  width: '400px',
  height: '500px',
  floating: true,
  headerTitle: 'PHPLA Support',
  botAvatar: ChatBotAvatar,
  bubbleStyle: { marginRight: '5px' },
  avatarStyle: { width: '46px', height: '45px' },
};

let lastNum = 0;
const randomNum = () => {
  const getRandomNum = Math.floor(Math.random() * 5);
  if (getRandomNum !== lastNum) {
    lastNum = getRandomNum;
    // console.log(lastNum);
  } else {
    randomNum();
  }
};

class ChatBotFeature extends Component {
  state = {
    opened: false,
    chatBotKey: null,
  }

  componentDidMount() {
    this.handleEnd = this.handleEnd.bind(this);
  }

  toggleFloating = ({ opened }) => {
    this.setState({ opened });
  };

  handleAboutUs = () => {
    this.setState({ opened: false });
    this.props.history.push('/about-us');
  };

  handleHelp = () => {
    this.setState({ opened: false });
    this.props.history.push('/help');
  };

  handleEnd() {
    setTimeout(() => this.setState({ opened: false }), 3000);
    randomNum();
    setTimeout(() => this.setState({ chatBotKey: lastNum }), 3500);
  }

  render() {
    const { opened } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <ChatBot
          key={this.state.chatBotKey}
          className="chat-bot-feature"
          handleEnd={this.handleEnd}
          steps={[
            {
              id: '1',
              message: 'Hello, Welcome to People Helping People in Los Angeles Inc. How may I help you?',
              trigger: '2',
            },
            {
              id: '2',
              options: [
                { value: 1, label: 'Learn More About PHPLA', trigger: '3' },
                { value: 2, label: 'Submit a Help Form', trigger: '4' },
                { value: 3, label: 'Contact Info', trigger: '5' },
              ],
            },
            {
              id: '3',
              message: 'I will redirect you to the About Us page.',
              trigger: () => {
                setTimeout(() => this.handleAboutUs(), 1500);
                return '6';
              },
            },
            {
              id: '4',
              message: 'I will redirect you to the Help page.',
              trigger: () => {
                setTimeout(() => this.handleHelp(), 1500);
                return '6';
              },
            },
            {
              id: '5',
              message: 'Call (833) 467-4752 or email info@phplosangeles.org if you have any questions or want to know more information about us.',
              trigger: '6',
            },
            {
              id: '6',
              message: 'Would you like to see the options again?',
              delay: 3000,
              trigger: '7',
            },
            {
              id: '7',
              options: [
                { value: 4, label: 'Yes', trigger: '2' },
                { value: 5, label: 'No', trigger: '8' },
              ],
            },
            {
              id: '8',
              message: 'Thank you for using the PHPLA support feature. Have a nice day!',
              end: true,
            },
          ]}
          opened={opened}
          toggleFloating={this.toggleFloating}
          {...config}
        />
      </ThemeProvider>
    );
  }
}

export default withRouter(ChatBotFeature);
