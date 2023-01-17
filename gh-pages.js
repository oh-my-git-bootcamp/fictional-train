var ghpages = require('gh-pages');

ghpages.publish(
  'public', // path to public directory
  {
    branch: 'gh-pages',
    repo: 'https://github.com/oh-my-git-bootcamp/fictional-train.git', // Update to point to your repository
    user: {
      name: 'Riccardo Merolla', // update to use your name
      email: 'riccardo.merolla@hey.com' // Update to use your email
    },
    dotfiles: true
  },
  () => {
    console.log('Deploy Complete!');
  }
);