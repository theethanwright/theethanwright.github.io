function showDescription(a){console.log("show "+a);for(var b=["#hiddenText1","#hiddenText2","#hiddenText3","#hiddenText4","#hiddenText5","#hiddenText6","#hiddenText7","#hiddenText8","#hiddenText9"],c=0;c<b.length;c++){var d=$(b[c]);d.hide()}var e="#"+a;$(e).show()}function addToPortrait(a){var b="#"+a,c=$(b+" > div").clone(!1);c.css({top:0,left:0,position:"absolute",width:"300"}),$("#holder").append(c),c.draggable(),c.find("img").resizable()}function clearAll(){$("#holder > .ui-draggable").remove()}function resetPortrait(){$("#holder > img").remove(),$("#holder > .ui-draggable").remove()}function savePortrait(){console.log("saving..."),html2canvas($("#holder"),{onrendered:function(a){a.toBlob(function(a){saveAs(a,"greekifyme.png")})}})}console.log("'Allo 'Allo!");