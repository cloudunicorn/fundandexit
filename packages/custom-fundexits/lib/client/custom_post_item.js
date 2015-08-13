Template.post_item.onRendered(function() {
    // Set a random color for each new post item
    $(this.find('.laval-post')).css('background', randomColor({
        luminosity: 'bright',
        hue: 'lavalCustomBlue'
    }));
});

// You can pass lavalBrightness, light, bright, dark or random to the luminosity property, and lavalCustomBlue, monochrome, red, orange, yellow, green, blue, purple or pink to the hue property.