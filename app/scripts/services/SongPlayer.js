(function() {
     function SongPlayer() {
          var SongPlayer = {};

          /**
          * @desc Current playing/paused song object
          * @type {Object}
          */
          var currentSong = null;

          /**
          * @desc Buzz object audio file
          * @type {Object}
          */
          var currentBuzzObject = null;


           /**
           * @function playSong
           * @desc Plays currentBuzzObject and sets the song's playing property to true
           * @param {Object} song
           */

          var playSong = function(song){
            currentBuzzObject.play();
            song.playing = true;
          };

          /**
           * @function setSong
           * @desc Stops currently playing song and loads new audio file as currentBuzzObject
           * @param {Object} song
           */

          var setSong = function(song) {
             if (currentBuzzObject) {
                currentBuzzObject.stop();
                currentSong.playing = null;
             }

            currentBuzzObject = new buzz.sound(song.audioUrl, {
               formats: ['mp3'],
               preload: true
            });

               currentSong = song;
            };


          /**
          * @function SongPlayer.play
          * @desc Either plays a currently paused song or sets and plays a new song object
          * @param {Object} song
          */

          SongPlayer.play = function(song) {
            if (currentSong !== song) {
              setSong(song);
              playSong(song);

            }else if (currentSong === song) {
                 if (currentBuzzObject.isPaused()) {
                    currentBuzzObject.play();
                 }
              }
          };


          /**
           * @function SongPlayer.pause
           * @desc Pauses the current song and sets song's playing property to false
           * @param {Object} song
           */

          SongPlayer.pause = function(song) {
           currentBuzzObject.pause();
               song.playing = false;
          };


          return SongPlayer;
         }

     angular
         .module('blocJams')
         .factory('SongPlayer', SongPlayer);
 })();
