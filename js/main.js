// enable strict mode
  "use strict";

// Start of Light Box
  // make div overlay for html
    var $overlay = $("<div class='overlay'></div>");
    var $image = $("<img>");
    var $title = $("<span></span>");
    var $caption = $("<p></p>");
    var $buttonLeft = $("<button class='btn-left'><</button>");
    var $buttonExit = $("<button class='btn-exit'>Exit</button>");
    var $buttonRight = $("<button class='btn-right'>></button>");

  // add html to overlay
    $overlay.append($image);
    $overlay.append($title);
    $overlay.append($caption);
    $overlay.append($buttonLeft);
    $overlay.append($buttonRight);
    $overlay.append($buttonExit);

  // add overlay to body
    $("body").append($overlay);

    // select gallery anchor
    $(".gallery a").on("click", function() {
      // select parent of selected anchor
        var currentImg = $(this).parent();
      // add class to selected parent
        currentImg.addClass("selected");
      // prevent img to open by link
        event.preventDefault();
      // get href attribute for imgLocation
        var $imgLocation = $(this).attr("href");
        console.log($imgLocation);

      // get img title
        var $titleName = $(this).children("img").attr("title");
        console.log($titleName);

      // get caption from .gallery li p
        var $captionDesc = $(this).next().text();
        console.log($captionDesc);

      // set src on <img> with $imgLocation
        $image.attr("src", $imgLocation);
     
      // set title on <span> with $titleName
        $title.text($titleName);

      // set caption on <p> with $captionDesc
        $caption.text($captionDesc);
      // show overlay
        $overlay.fadeIn();
      // get image from link  
    });

      // navigation left on click
      $buttonLeft.on("click", function() {
        // select previous gallery li
          var $newImg = $(".gallery .selected").prev("li");
        // get href from previous image
          var $newImgLocation = $newImg.children("a").attr("href");
        // remove class on next li ( previous li )
          $newImg.next().removeClass("selected");
        // add class to current li
          $newImg.addClass("selected");
        // get title name
          var $newTitleName = $newImg.children("a").children("img").attr("title");
        // get caption
          var $newCaptionDesc = $newImg.children("a").next().text();
        // set image location
          $image.attr("src", $newImgLocation);
        // set title
          $title.text($newTitleName);
        // set caption
          $caption.text($newCaptionDesc);
      });


      // navigation right on click
      $buttonRight.on("click", function() {
        // select next gallery li
          var $newImg = $(".gallery .selected").next("li");
        // get href from next image
          var $newImgLocation = $newImg.children("a").attr("href");
        // remove class on previous li ( next li )
          $newImg.prev().removeClass("selected");
        // add class to current li
          $newImg.addClass("selected");
        // get title name
          var $newTitleName = $newImg.children("a").children("img").attr("title");
        // get caption
          var $newCaptionDesc = $newImg.children("a").next().text();
        // set image location
          $image.attr("src", $newImgLocation);
        // set title
          $title.text($newTitleName);
        // set caption
          $caption.text($newCaptionDesc);
      });


      // overlay exit button
      $buttonExit.on("click", function() {
        // remove selected from every .gallery li
          $(".gallery li").removeClass("selected");
        // hide overlay on button click
          $overlay.fadeOut();
      });   
// End of Light Box



// Start of Live Search
    $(".searchbox").keyup(function() {
      // get search value
      var searchVal = $(this).val();
      // looping on gallery img element
      $(".gallery img").each(function() {
        // get title attribute
        var searchTitle = $(this).attr("title");
        // turn searchVal and searchTitle to lower case,
        // try to match searchTitle with searchVal in gallery img loop,
        // make searchVal >= 0 so all gallery img will show when searchVal = 0
        if(searchTitle.toLowerCase().search(searchVal.toLowerCase()) >= 0) {
          // show gallery img filtered by searchTitle
          $(this).slideDown();
        } else {
          // hide gallery img that not match with searchTitle and searchVal
          $(this).slideUp();
        }
      });
    });
// End of Live Search