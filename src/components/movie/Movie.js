import React,{Component} from 'react'
import {View,Text,ScrollView,ActivityIndicator} from 'react-native'

// 导入自定义的无状态组件,无状态组件效率高
import MovieTypeView from './view/MovieType'

export default class Movie extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoading:true,
            inTheatersList:[],
            comingSoonList:[],
            top250List:[]
        }
    }
    componentWillMount(){
        Promise.all([
            fetch(
                "https://api.douban.com/v2/movie/in_theaters?start=0&count=10"
              ).then(res => res.json()),
              fetch(
                "https://api.douban.com/v2/movie/coming_soon?start=0&count=10"
              ).then(res => res.json()),
              fetch("https://api.douban.com/v2/movie/top250?start=0&count=10").then(
                res => res.json()
              )
        ]).then(results=>{
            console.log(results)
            this.setState({
                isLoading:false,
                inTheatersList:results[0].subjects,
                comingSoonList:results[1].subjects,
                top250List:results[2].subjects
            })
        })
    }
    render(){
       if (this.state.isLoading) {
           return <ActivityIndicator size="large" color="#0000ff"></ActivityIndicator>
       } else {
           return (
               <ScrollView>
                   {/* 1 正在热映 */}
                   <MovieTypeView 
                    title="正在热映" 
                    movieList={this.state.inTheatersList} 
                    movieType="in_theaters"
                    navigation={this.props.navigation}
                    />
                    {/* 即将热映 */}
                    <View style={{marginTop:20}}>
                        <MovieTypeView 
                        title="即将热映" 
                        movieList={this.state.comingSoonList} 
                        movieType="coming_soon"
                        navigation={this.props.navigation}
                        />
                    </View>
                    {/* top250  */}
                    <View style={{marginTop:20}}>
                        <MovieTypeView 
                        title="top250" 
                        movieList={this.state.top250List} 
                        movieType="top250"
                        navigation={this.props.navigation}
                        />
                    </View>
               </ScrollView>
           )
       }
    }
}