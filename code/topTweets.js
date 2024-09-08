function getTopLikedTweets(tweets, k) {
  const array = new Array(k);
  array.fill({ id: 0, likes: -1 });
  const maxIds = {}; // added to manage the same Ids.
  for (let k = 0; k < array.length; k++) {
    let max = array[k];
    /* let previous = array[k - 1] || null; 
    this approach was bad for same likes with different Ids so I changed it. eg. { id: 1, likes: 20}, {id:14, 20}
    */

    for (let n = 0; n < tweets.length; n++) {
      if (tweets[n].likes > max.likes && !maxIds[tweets[n].id]) {
        /* if (previous === null) {
           max = tweets[n];
         } no need of it after adding hash
         if (previous.likes >= tweets[n].likes) */
        max = tweets[n];
      }
    }

    if (max.likes > -1) {
      array[k] = max;
      maxIds[max.id] = true;
    }
  }
  return array;
}

/*There are 217 test cases.
// Loop 1-100, id = 1-> 100 like = 1->100 (100 cases)
// Loop 100-1, id = 1->100, likes = 100->1 (100 cases)
// Loop Random, id = 1->100, likes = rand(0, 10000) (17 cases)


*/

module.exports = {
  getTopLikedTweets,
};
