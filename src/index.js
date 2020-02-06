import scraper from './scraper';

// keep running
// process.stdin.resume();

import connectDB from './services/mongoose';

const main = async () => {
    // Connect to DB - this keeps the process running
    // IMPORTANT - This is done before any Model is registered
    await connectDB();
  
    scraper();
  };
  
  // Async Wrapping Function
  // Catches all errors
  (async () => {
    try {
      await main();
    } catch (error) {
      console.log(error.stack);
    }
  })();