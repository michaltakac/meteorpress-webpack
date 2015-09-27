import {Posts} from 'collections';
// we don't call this so we're just importing to initialize file

console.log('\n\nRunning on server only');
console.log('There are # posts:', Posts.find().fetch().length);
