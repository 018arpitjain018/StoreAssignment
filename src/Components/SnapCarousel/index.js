import React, {useRef, useEffect} from 'react';
import {FlatList, Dimensions} from 'react-native';

import CarouselItem from './CarouselItem';

/**
 * The code snippet is a React functional component called SnapCarousel 
 * which renders a horizontal carousel of images using the FlatList component provided by React Native. 
 * 
 * @params
 * * data (required): List if carousel items to be displayed.
 * @returns
 * * The SnapCarousel component provides a way to display a horizontal carousel of images that automatically scrolls through the items after every 3 seconds. 
 * * The user can also manually swipe left or right to scroll through the items.
 */
const {width} = Dimensions.get('window');
function SnapCarousel({data}) {
  const carousalRef = useRef();
  const indexRef = useRef(0);

  /**
   * The startCarousel function is responsible for updating the current index of the carousel 
   * and scrolling the carousel to the next item after every 3 seconds.
   * 
   * @param
   * This method does not take any parameters.
   * @returns
   * This method does not return any value.
   */
  useEffect(() => {
    startCarousel();
  }, []);

  /**
   * The startCarousel that starts a carousel which automatically scrolls through a list of items. 
   * It achieves this by using the setInterval() function, 
   * which is called every 3 seconds to increment the index of the item to be displayed, 
   * and then calls the scrollToIndex() function of the carousel to scroll to the next item.
   * 
   * @param
   * This method does not take any parameters.
   * @returns
   * This method does not return any value.
   */
  const startCarousel = () => {
    setInterval(() => {
      let index = parseInt(indexRef.current) + 1
      if (index > data.length - 1) {
        indexRef.current = 0
        index = parseInt(indexRef.current)
      }

      carousalRef.current?.scrollToIndex({
        animated: true,
        index: (index) % 19,
      });
    }, 3000);
  };

  /**
   * This function is used as a callback when a scroll event occurs in a React Native ScrollView or FlatList. 
   * It extracts the horizontal offset of the scroll event, divides it by the width of the view, 
   * and rounds the result to obtain the index of the currently visible item. It then updates a reference to this index, 
   * which can be used to determine which item to display.
   * 
   * @param
   * * event: An object representing the scroll event, which includes information such as the content offset, content size, and scroll view size.
   * @returns
   * None. The function updates the indexRef object via a reference, which is used externally to determine the current index of the carousel.
   */
  const onScroll = event => {
    const ind = event.nativeEvent.contentOffset.x / width;
    const roundIndex = Math.round(ind);
    indexRef.current = roundIndex;
  };

  return (
    <FlatList
      ref={carousalRef}
      horizontal={true}
      data={data}
      renderItem={({item}) => <CarouselItem item={item} />}
      keyExtractor={item => item + ''}
      snapToAlignment="start"
      snapToInterval={width}
      scrollEventThrottle={16}
      decelerationRate={0}
      pagingEnabled={true}
      onScroll={onScroll}
    />
  );
}

export default SnapCarousel;
