
var AKBG = {

  /* み */
  宮脇咲良 : {
    surname       : {
      kanji       : '宮脇',
      hiragana    : 'みやわき'
    },
    given_name    : {
      kanji       : '咲良',
      hiragana    : 'さくら'
    },
    nickname      : 'さくら',
    date_of_birth : '1998-03-19',
    blood_type    : 'A',
    from          : '鹿児島',
    office        : 'AKS',
    current_teams : [ 'KIV', 'A' ],

    gplus         : 'https://plus.google.com/102808008463301583196',
    nanagogo      : 'https://7gogo.jp/miyawaki-sakura',
  },

}

// export if using as a Node module
if (typeof module !== 'undefined') {
  module.exports = AKBG;
}
