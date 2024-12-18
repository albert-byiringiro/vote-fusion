# VoteFusion 🗳️

A real-time, collaborative ranked-choice voting application built with modern web technologies. Make group decisions easier by ranking options collaboratively with friends!

## Features ✨

- **Real-time Collaboration**: Instantly see updates as participants join and vote using WebSocket connections
- **Ranked Choice Voting**: Participants can rank their preferences, leading to more democratic outcomes
- **User-Friendly Interface**: Modern, responsive design with intuitive controls
- **Live Results**: Watch results update in real-time as votes are cast
- **Secure**: JWT-based authentication and secure WebSocket connections

## Tech Stack 🛠️

- **Frontend**: React with Vite, TypeScript, and TailwindCSS
- **Backend**: NestJS with WebSockets (Socket.IO)
- **Database**: Redis with RedisJSON for real-time data storage
- **State Management**: Valtio for simple and efficient state management
- **Testing**: Storybook for component development and testing
- **Containerization**: Docker and Docker Compose for easy deployment

## Prerequisites 📋

- Node.js (v16 or higher)
- Docker and Docker Compose
- npm or yarn package manager

## Installation 🚀

1. Clone the repository:
```bash
git clone https://github.com/albertbyiringiro/vote-fusion.git
cd vote-fusion
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```env
PORT=3000
CLIENT_PORT=5173
REDIS_HOST=localhost
REDIS_PORT=6379
JWT_SECRET=your-secret-key
CORS_ORIGIN=http://localhost:5173
```

## Running the Application 🏃‍♂️

1. Start Redis using Docker Compose:
```bash
npm run docker:compose
```

2. Start the development servers:
```bash
# Start both client and server in development mode
npm run start

# Or run them separately:
npm run client:dev    # Start client
npm run server:dev    # Start server
```

3. Access the application:
- Frontend: http://localhost:5173
- Backend: http://localhost:3000

## Usage 📝

1. **Create a Poll**:
   - Enter a poll topic
   - Set the number of votes per participant (1-5)
   - Enter your name
   - Share the generated poll ID with participants

2. **Join a Poll**:
   - Enter the poll ID
   - Enter your name
   - Start participating!

3. **Voting Process**:
   - Add nominations for the poll topic
   - Rank your preferred options
   - Submit your votes
   - View real-time results

## Development 👨‍💻

- Run Storybook for component development:
```bash
npm run storybook
```

- Project Structure:
  - `/client`: React frontend application
  - `/server`: NestJS backend application
  - `/shared`: Shared TypeScript types and utilities
  - `/docker-compose.yml`: Docker configuration for Redis

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License 📄

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Author ✍️

Albert Byiringiro

## Acknowledgments 🙏

- Thanks to all contributors who have helped shape VoteFusion
- Built with modern web technologies and best practices
- Inspired by the need for better group decision-making tools
