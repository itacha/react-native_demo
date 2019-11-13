/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Component} from 'react';
import {  createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from './src/components/home/Home'
import Movie from './src/components/movie/Movie'
import MovieList from './src/components/movie/MovieList'
import MovieInfo from './src/components/movie/MovieInfo'
import Mine from './src/components/mine/Mine'

import {
 Image
} from 'react-native';

// 创建首页独立的Navigation
const HomeStack=createStackNavigator({
  Home:{
    screen:Home,
    // 如果是静态的，就可以写死在这里，如果是动态的，不要在这里写，应该在每个组件中设置
    navigationOptions:{
      headerTitle:'首 页',
      headerTitleStyle:{
        flex:1,
        textAlign:'center'
      }
    }
  }
})
// 创建电影独立的Navigation
const MovieStack=createStackNavigator({
  Movie:{
    screen:Movie,
    // 如果是静态的，就可以写死在这里，如果是动态的，不要在这里写，应该在每个组件中设置
    navigationOptions:{
      headerTitle:'电 影',
      headerTitleStyle:{
        flex:1,
        textAlign:'center'
      }
    }
  },
  MovieList:{
    screen:MovieList,
    navigationOptions:{
      headerTitleStyle:{
        flex:1,
        textAlign:'center'
      }
    }
  },
  MovieInfo:{
    screen:MovieInfo,
    navigationOptions:{
      headerTitleStyle:{
        flex:1,
        textAlign:'center'
      }
    }
  }
})
// 创建我的独立的Navigation
const MineStack=createStackNavigator({
  Mine:{
    screen:Mine,
    // 如果是静态的，就可以写死在这里，如果是动态的，不要在这里写，应该在每个组件中设置
    navigationOptions:{
      headerTitle:'我 的',
      headerTitleStyle:{
        flex:1,
        textAlign:'center'
      }
    }
  }
})

// 设置底部TabBar
const TabBar = createBottomTabNavigator({
  Home:{
    screen:Home,
    navigationOptions:{
      tabBarLabel:"首页",
      tabBarIcon:({focused,tintColor})=>{
        return (
          <Image 
            sourse={
              focused
              ?require("./src/statics/images/tarBar/home_selected.png")
              :require("./src/statics/images/tarBar/home_normal.png")
            }
            style={{tintColor:tintColor,width:25,height:25}}
          />
        );
      }
    }
  },
  Movie:{
    screen:Movie,
    navigationOptions:{
      tabBarLabel:"电影",
      tabBarIcon:({focused,tintColor})=>{
        return (
          <Image
          sourse={
            focused
              ?require("./src/statics/images/tarBar/movie_selected.png")
              :require("./src/statics/images/tarBar/movie_normal.png")
          }
          style={{tintColor:tintColor,width:25,height:25}}
          />
        )
      }
    }
  },
  Mine:{
    screen:Mine,
    navigationOptions:{
      tabBarLabel:"我的",
      tabBarIcon:({focused,tintColor})=>{
        return (
          <Image 
            source={
              focused
                ?require("./src/statics/images/tarBar/mine_selected.png")
                :require("./src/statics/images/tarBar/mine_normal.png")
            }
            style={{tintColor:tintColor,width:25,height:25}}
          />
        )
      }
    }
  }
},
{
  tabBarOptions:{
    activeTintColor:'black',
    inactiveTintColor:'gray',
  }
}
);

export default createAppContainer(TabBar)