import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';
import Header from '../components/Headers';
import IconComponent from '../components/IconComponent';
import Input from '../components/Input';
import {faFilter} from '@fortawesome/free-solid-svg-icons';
import FeaturedCard from '../components/FeaturedCard';
import chilly from '../assets/chillyMomo.jpg';

const SearchScreen = () => {
  return (
    <ScrollView>
      <Header text="Find your favorite MOMO" fontSize={20} />
      <View style={styles.searchWrapper}>
        <View style={styles.searchBar}>
          <Input placeholder="Search by name, category..." />
        </View>
        <IconComponent iconName={faFilter} size={25} />
      </View>
      <FeaturedCard
        momoImage={chilly}
        momoName="Chilli MOMO"
        momoPrice={200}
        momoDescription="Momo made with proper sanitation"
      />
      <FeaturedCard
        momoImage={chilly}
        momoName="Chilli MOMO"
        momoPrice={200}
        momoDescription="Momo made with proper sanitation"
      />
      <FeaturedCard
        momoImage={chilly}
        momoName="Chilli MOMO"
        momoPrice={200}
        momoDescription="Momo made with proper sanitation"
      />
      <FeaturedCard
        momoImage={chilly}
        momoName="Chilli MOMO"
        momoPrice={200}
        momoDescription="Momo made with proper sanitation"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
  },
  searchBar: {
    width: '89%',
    marginHorizontal: 9,
  },
});

export default SearchScreen;
