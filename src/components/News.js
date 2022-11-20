import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {


  // articles = [
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Michelle Watson and Jason Hanna, CNN",
  //     "title": "Firefighters are trapped after a building collapses in Philadelphia, officials say - CNN",
  //     "description": "A Philadelphia firefighter has died in the collapse of a building Saturday morning in the city, a fire official said.",
  //     "url": "https://www.cnn.com/2022/06/18/us/philadelphia-building-collapse/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220618065054-01-philadelphia-building-collapse-0617-super-tease.jpg",
  //     "publishedAt": "2022-06-18T11:40:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "The Guardian" },
  //     "author": "Ed Pilkington",
  //     "title": "The ‘big rip-off’: how Trump exploited his fans with ‘election defense’ fund - The Guardian US",
  //     "description": "The former president used donations to a nonexistent legal defense fund for his hotels and the January 6 Ellipse rally",
  //     "url": "https://amp.theguardian.com/us-news/2022/jun/18/donald-trump-election-defense-fundraising-defrauded-fans",
  //     "urlToImage": "https://i.guim.co.uk/img/media/b817627fbbe40ff8c2cff392ee9ac627b435f262/0_133_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=38b2d8939cb16d4dc3c006c37b1df540",
  //     "publishedAt": "2022-06-18T11:28:00Z",
  //     "content": "At 8.38pm on 4 November 2021, the day after America had gone to the polls to elect its next president, Donald Trump sent out a message to hundreds of thousands of his supporters from the email addres… [+7871 chars]"
  //   },
  //   {
  //     "source": { "id": "politico", "name": "Politico" },
  //     "author": null,
  //     "title": "How evangelical Christians are sizing up the 2024 GOP race for president - POLITICO",
  //     "description": "Donald Trump drew applause at this week's Faith & Freedom conference — but so did speeches from other potential GOP presidential candidates.",
  //     "url": "https://www.politico.com/news/2022/06/18/evangelical-christians-2024-gop-president-race-00040692",
  //     "urlToImage": "https://static.politico.com/50/73/28586932493fbc398690c70f70fa/trump-republicans-58874.jpg",
  //     "publishedAt": "2022-06-18T11:00:00Z",
  //     "content": "The groups annual national conference this week at the Opryland resort in Nashville is, officially, midterm election-themed. But the gathering was also a soft launch for some of the candidates evange… [+8400 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Story By Reuters",
  //     "title": "Western Europeans wilt in early summer heatwave, compounding climate change fears - CNN",
  //     "description": "Spain is seeing its hottest early summer temperatures, one area of France banned outdoor events, and drought stalked Italian farmers as a heatwave sent Europeans hunting for shade and fretting over climate change.",
  //     "url": "https://www.cnn.com/2022/06/18/europe/europe-heatwave-climate-change-concerns-intl/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220618091620-01-europe-heatwave-june-super-tease.jpeg",
  //     "publishedAt": "2022-06-18T10:41:00Z",
  //     "content": "(Reuters)Spain is seeing its hottest early summer temperatures, one area of France banned outdoor events, and drought stalked Italian farmers as a heatwave sent Europeans hunting for shade and fretti… [+3560 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-wall-street-journal",
  //       "name": "The Wall Street Journal"
  //     },
  //     "author": "Elaine Yu, Caitlin Ostroff",
  //     "title": "Bitcoin’s Price Falls Below $20,000 - The Wall Street Journal",
  //     "description": "The cryptocurrency has lost 72% of its value from its record high in November",
  //     "url": "https://www.wsj.com/articles/bitcoins-price-falls-below-20-000-11655542641",
  //     "urlToImage": "https://images.wsj.net/im-567212/social",
  //     "publishedAt": "2022-06-18T10:22:00Z",
  //     "content": "The price of bitcoin has fallen below the key psychological level of $20,000 as a brutal selloff in cryptocurrencies deepened.\r\nBitcoin fell momentarily to $18,739.50 and stayed below $20,000 on Satu… [+368 chars]"
  //   },
  //   {
  //     "source": { "id": "the-washington-post", "name": "The Washington Post" },
  //     "author": "Amy Cheng, Adela Suliman, Victoria Bisset",
  //     "title": "Latest Russia-Ukraine war news: Live updates - The Washington Post",
  //     "description": "U.S. officials say the danger of Russia swallowing Ukraine and becoming more emboldened is worth risking a long war and potential global economic turmoil.",
  //     "url": "https://www.washingtonpost.com/world/2022/06/18/russia-ukraine-war-putin-news-live-updates/",
  //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/LUBLO6XOOMI6ZH4QPHPR7MUCSY.jpg&w=1440",
  //     "publishedAt": "2022-06-18T09:15:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "TMZ" },
  //     "author": "TMZ Staff",
  //     "title": "Johnny Depp Fans Pushing 'Camille Vasquez for President' Merch - TMZ",
  //     "description": "Camille Vasquez for President merch for sale for Johnny Depp's Lawyer.",
  //     "url": "https://www.tmz.com/2022/06/18/camille-vasquez-johnny-depp-president-merch-sale/",
  //     "urlToImage": "https://imagez.tmz.com/image/12/16by9/2022/06/17/120bfd87999643778588d87949c636f0_xl.jpg",
  //     "publishedAt": "2022-06-18T08:00:00Z",
  //     "content": "Johnny Depp's fans not only have love for the actor ... they're showering his lawyer with the highest honor in the land ... pushing for her to become the first woman Prez!\r\nDepp fans have plastered C… [+828 chars]"
  //   },
  //   {
  //     "source": { "id": "fox-news", "name": "Fox News" },
  //     "author": "Landon Mion",
  //     "title": "Bill Cosby civil trial jury will have to restart deliberations after nearly reaching verdict - Fox News",
  //     "description": "The jury in the trial for sexual misconduct allegations against Bill Cosby must restart deliberations after answering nearly every question on the verdict form.",
  //     "url": "https://www.foxnews.com/entertainment/bill-cosby-civil-trial-jury-restart-deliberations",
  //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/2017-06-16T162453Z_1284511624_RC1D09AD0290_RTRMADP_3_PEOPLE-COSBY.jpg",
  //     "publishedAt": "2022-06-18T07:56:11Z",
  //     "content": "Jurors in the civil trial for sexual misconduct allegations against actor and comedian Bill Cosby must start deliberations over after reaching a verdict on Friday for nearly all the questions asked o… [+3842 chars]"
  //   },
  //   {
  //     "source": { "id": "cnn", "name": "CNN" },
  //     "author": "Taylor Romine, CNN",
  //     "title": "3 people assaulted with an 'edged weapon' at San Francisco International Airport, police say - CNN",
  //     "description": "Three people suffered injuries Friday evening at San Francisco International Airport's departure terminal after a man attacked them with an \"edged weapon,\" authorities said.",
  //     "url": "https://www.cnn.com/2022/06/18/us/san-francisco-int-airport-assault/index.html",
  //     "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220618015128-01-san-francisco-int-airport-knife-attack-file-super-tease.jpg",
  //     "publishedAt": "2022-06-18T05:56:00Z",
  //     "content": "(CNN)Three people suffered injuries Friday evening at San Francisco International Airport's departure terminal after a man attacked them with an \"edged weapon,\" authorities said. \r\nThe suspect drove … [+680 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "YouTube" },
  //     "author": null,
  //     "title": "Warriors Fans at Chase Center Celebrate After Watching 2022 NBA Championship Win in Game 6 - NBC Bay Area",
  //     "description": "The Golden State Warriors won their fourth NBA championship in just eight years with a 103-90 win against the Boston Celtics in Game 6 Thursday night. The ga...",
  //     "url": "https://www.youtube.com/watch?v=BZjnlrGlKLg",
  //     "urlToImage": "https://i.ytimg.com/vi/BZjnlrGlKLg/maxresdefault.jpg",
  //     "publishedAt": "2022-06-18T05:01:27Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "MMA Fighting" },
  //     "author": "Shaun Al-Shatti",
  //     "title": "PFL 4 results: Alexander Martinez boots Clay Collard out of playoff spot with controversial split decision - MMA Fighting",
  //     "description": "Alexander Martinez edged out Clay Collard via controversial decision to kept his dreams of winning the $1 million grand prize alive at PFL 4.",
  //     "url": "https://www.mmafighting.com/2022/6/18/23173443/pfl-4-results-alexander-martinez-boots-clay-collard-out-of-a-playoff-spot-with-controversial-split",
  //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/6ol4BlJWezoDXXzwGO-BrNp90cA=/0x55:5472x2920/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23636793/MB3_9234_1.jpg",
  //     "publishedAt": "2022-06-18T04:51:31Z",
  //     "content": "As the PFL postseason rapidly approaches, it was all or nothing for Alexander Martinez and Clay Collard at PFL 4, with the winner advancing to the playoffs and the loser going home.\r\nIn the end, it w… [+5420 chars]"
  //   },
  //   {
  //     "source": { "id": "fox-news", "name": "Fox News" },
  //     "author": "Lawrence Richard",
  //     "title": "US military veterans captured in Ukraine seen for first time in Russian TV footage - Fox News",
  //     "description": "A Russian news outlet has aired video footage of the two U.S. service members who went missing while they were fighting in Ukraine last week. President Joe Biden is aware of the situation but has not confirmed their capture to Russian forces.",
  //     "url": "https://www.foxnews.com/world/us-military-veterans-captured-ukraine-russian-tv",
  //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/06/AP221667601911981.jpg",
  //     "publishedAt": "2022-06-18T03:45:50Z",
  //     "content": "Two U.S. military veterans who went missing in Ukraine last week were shown on a Russian news broadcast telling their loved ones Russian separatists had captured them.\r\nThe footage on the Russian new… [+2761 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "CBS Sports" },
  //     "author": "",
  //     "title": "2022 U.S. Open: Rory McIlroy chases serenity of his youth while eyeing first major crown since 2014 - CBS Sports",
  //     "description": "Surrounding McIlroy at The Country Club are versions of his former major-winning self",
  //     "url": "https://www.cbssports.com/golf/news/2022-u-s-open-rory-mcilroy-chases-serenity-of-his-youth-while-eyeing-first-major-crown-since-2014/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/06/18/e4b00ad6-f77a-4cec-87f1-1776f75f397f/thumbnail/1200x675/8b6fb1aa30029c4e178b18283fe86bd5/rory-mcilroy-r2-us-open-2022-g.png",
  //     "publishedAt": "2022-06-18T02:54:00Z",
  //     "content": "BROOKLINE, Mass. -- In some ways, Rory McIlroy has been chasing his 25-year-old self for the last eight years. He's 33 now without a major championship since that summer he turned 25. He won two that… [+4742 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "New York Times" },
  //     "author": "Patricia Mazzei",
  //     "title": "Florida Allows Doctors to Order Vaccines for Very Young Children - The New York Times",
  //     "description": "Unlike the other 49 states and the District of Columbia, Florida did not allow health care providers to preorder the vaccines ahead of the federal government’s June 14 deadline.",
  //     "url": "https://www.nytimes.com/2022/06/17/us/florida-kids-vaccine-desantis.html",
  //     "urlToImage": "https://static01.nyt.com/images/2022/06/17/us/17virus-briefing-florida/17virus-briefing-florida-facebookJumbo.jpg",
  //     "publishedAt": "2022-06-18T02:51:26Z",
  //     "content": "Vaccinations for very young children are typically administered at pediatricians offices, but unlike pharmacies in the federal Covid vaccine program, doctors cannot order doses on their own, Dr. Gwyn… [+875 chars]"
  //   },
  //   {
  //     "source": { "id": "usa-today", "name": "USA Today" },
  //     "author": "Celina Tebor and N'dea Yancey-Bragg, USA TODAY",
  //     "title": "Ukraine moves closer to EU candidacy; Families of 2 missing American veterans speak out: Latest updates - USA TODAY",
  //     "description": "On Friday, President Joe Biden said he'd been briefed on the Americans missing in Ukraine and urged others not to travel there. Latest updates.",
  //     "url": "https://www.usatoday.com/story/news/politics/2022/06/17/ukraine-russia-invasion-live-updates/7655995001/",
  //     "urlToImage": "https://www.gannett-cdn.com/presto/2022/06/17/USAT/2f7e1173-d2d1-443e-80e9-bbbea29b1750-AP_Belgium_EU_Ukraine_Bid.jpg?auto=webp&crop=498,281,x0,y12&format=pjpg&width=1200",
  //     "publishedAt": "2022-06-18T01:52:30Z",
  //     "content": "The executive arm of the European Union recommended Friday that Ukraine become a candidate for membership, the first step in a process that could take decades. \r\nThe endorsement is set to be discusse… [+7836 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "KTVU San Francisco" },
  //     "author": "Associated Press",
  //     "title": "Deputy: 2 officers had chance to shoot Uvalde school gunman - KTVU FOX 2 San Francisco",
  //     "description": "Two Uvalde city police officers passed up a fleeting chance to shoot a gunman outside Robb Elementary School before he went on to kill 21 people inside the school, a senior sheriff's deputy told The New York Times.",
  //     "url": "https://www.ktvu.com/news/deputy-2-officers-had-chance-to-shoot-uvalde-school-gunman",
  //     "urlToImage": "https://images.foxtv.com/static.ktvu.com/www.ktvu.com/content/uploads/2022/06/1280/720/GettyImages-1240882924.jpg?ve=1&tl=1",
  //     "publishedAt": "2022-06-18T01:32:47Z",
  //     "content": "UVALDE, Texas - Two Uvalde city police officers passed up a fleeting chance to shoot a gunman outside Robb Elementary School before he went on to kill 21 people inside the school, a senior sheriff's … [+3637 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "Deadline" },
  //     "author": "Ted Johnson",
  //     "title": "Amber Heard Says Her Therapist’s Notes, Excluded From Johnny Depp Trial, Would Have Made A Difference In Jury’s Verdict - Deadline",
  //     "description": "Amber Heard said that she believes that notes taken by her doctor, in which she reported alleged abuse by Johnny Depp, would have made a difference in the jury’s decision in her ex-husband’s defamation case. The notes, though, were excluded from the six-week …",
  //     "url": "https://deadline.com/2022/06/johnny-depp-amber-heard-trial-2-1235048095/",
  //     "urlToImage": "https://deadline.com/wp-content/uploads/2022/06/AP22152762888701.jpg?w=1024",
  //     "publishedAt": "2022-06-18T01:14:00Z",
  //     "content": "Amber Heard said that she believes that notes taken by her doctor, in which she reported alleged abuse by Johnny Depp, would have made a difference in the jury’s decision in her ex-husband’s defamati… [+5198 chars]"
  //   },
  //   {
  //     "source": { "id": "google-news", "name": "Google News" },
  //     "author": null,
  //     "title": "Dow Jones Futures: What To Do As Bear Market Intensifies; Tesla Rival Leads 5 Key Stocks - Investor's Business Daily",
  //     "description": null,
  //     "url": "https://news.google.com/__i/rss/rd/articles/CBMikQFodHRwczovL3d3dy5pbnZlc3RvcnMuY29tL21hcmtldC10cmVuZC9zdG9jay1tYXJrZXQtdG9kYXkvZG93LWpvbmVzLWZ1dHVyZXMtd2hhdC10by1kby1hcy1iZWFyLW1hcmtldC1pbnRlbnNpZmllcy10ZXNsYS1yaXZhbC1sZWFkcy01LWtleS1zdG9ja3Mv0gEA?oc=5",
  //     "urlToImage": null,
  //     "publishedAt": "2022-06-18T00:43:00Z",
  //     "content": null
  //   },
  //   {
  //     "source": { "id": null, "name": "New York Post" },
  //     "author": "Associated Press",
  //     "title": "Russia frees captive Ukrainian medic who filmed Mariupol atrocity - New York Post ",
  //     "description": "Yuliia Paievska, a medic who recorded and released 256 gigabytes of shocking footage captured during bloody fighting in Mariupol, was freed by Russian forces on Friday.",
  //     "url": "https://nypost.com/2022/06/17/russia-frees-captive-hero-medic-who-filmed-mariupol-siege/",
  //     "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/06/newspress-collage-22713200-1655509664586.jpg?quality=75&strip=all&1655495348&w=1024",
  //     "publishedAt": "2022-06-18T00:42:00Z",
  //     "content": "TALLINN, Estonia A celebrated Ukrainian medic whose footage was smuggled out of the besieged city of Mariupol by an Associated Press team was freed by Russian forces on Friday, three months after she… [+3671 chars]"
  //   },
  //   {
  //     "source": { "id": null, "name": "SciTechDaily" },
  //     "author": null,
  //     "title": "NASA’s OSIRIS-REx Spacecraft Observes Asteroid Bennu’s Boulder “Body Armor” - SciTechDaily",
  //     "description": "Asteroid Bennu’s boulder-covered surface gives it protection against small meteoroid impacts, according to observations of craters by NASA’s OSIRIS-REx (Origins, Spectral Interpretation, Resource Identification, Security-Regolith Explorer) spacecraft. OSIRIS-…",
  //     "url": "https://scitechdaily.com/nasas-osiris-rex-spacecraft-observes-asteroid-bennus-boulder-body-armor/",
  //     "urlToImage": "https://scitechdaily.com/images/Tour-of-Asteroid-Bennu.jpg",
  //     "publishedAt": "2022-06-18T00:40:19Z",
  //     "content": "ByBill Steigerwald, NASA Goddard Space Flight CenterJune 17, 2022\r\nAsteroid Bennus remarkable terrain. Credit: NASAs Goddard Space Flight Center\r\nAsteroid Bennus boulder-covered surface gives it prot… [+6979 chars]"
  //   }
  // ]
  constructor(props){
    super(props);
    this.state = {
      // articles : this.articles,
    articles: [],//basically to show the data it needs a null array thats why it is showing error 
    page: 1,
      loading : false,
      totalResults : 0
      // jese hum phele state use karte hue set state use kaarte the vese hi hum esme bhi 2 pass karne he loading esliye liya he 
    }
    document.title = this.props.category;
  }




  // state = {
  //   // articles: [],//basically to show the data it needs a null array thats why it is showing error 

  //   loading: false,
  //   // page: 1
  // }

  async componentDidMount() {// async return promise 
    // this.setState({ loading: true });

    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c92c8f0b89e4d0cb393e669a7e5f842&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);// await means whole code will run after that await function will run
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // })
    this.updateNews();
  }
  //yeh ekk life cycle method he 


  async updateNews() {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c92c8f0b89e4d0cb393e669a7e5f842&page=${this.state.page}&pageSize=${this.props.pageSize}`;//  ted tick esliye use kiye taki hum ese as a javascript element use kar sake
    this.setState({ loading: true });
    let data = await fetch(url);
    // await means whole code will run after that await function will run
    this.props.setProgress(30);
    let parsedData = await data.json()
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false


    })
    this.props.setProgress(100);

  }

  handelPrevOne = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c92c8f0b89e4d0cb393e669a7e5f842&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;//  ted tick esliye use kiye taki hum ese as a javascript element use kar sake
    // this.setState({ loading: true });
    // let data = await fetch(url);// await means whole code will run after that await function will run
    // let parsedData = await data.json()
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false


    // })
    this.setState({page:this.state.page-1})
    this.updateNews();

  }

  handelNextOne = async () => {
    // if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

    // }
    // else {
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c92c8f0b89e4d0cb393e669a7e5f842&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`; //https://newsapi.org/v2/everything?domains=wsj.com&apiKey=6c92c8f0b89e4d0cb393e669a7e5f842&page=${this.state.page+1}&pageSize=${this.props.pageSize}//  ted tick esliye use kiye taki hum ese as a javascript element use kar sake
    //   let data = await fetch(url);// await means whole code will run after that await function will run
    //   this.setState({ loading: true });
    //   let parsedData = await data.json()
    //   console.log(parsedData);
    //   this.setState({
    //     articles: parsedData.articles,
    //     page: this.state.page + 1,
    //     loading: false
    //   })
    // }
    this.setState({page:this.state.page+1});
    this.updateNews();

  }

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=6c92c8f0b89e4d0cb393e669a7e5f842&page=${this.state.page}&pageSize=${this.props.pageSize}`;//  ted tick esliye use kiye taki hum ese as a javascript element use kar sake
    this.setState({ loading: true });
    let data = await fetch(url);// await means whole code will run after that await function will run
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults : parsedData.totalResults,
      loading: false


    })
  };


  render() {
    return (
      <>
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>
        {/* {this.state.loading && <Spinner />} */}
        {/* yeh hume esliye likha taki jab loading true ho tab hi hume sirf loading vali gif show ho */}
        
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
      <div className="conatnier">
        <div className="row">
          {this.state.articles.map((element) => {//!this.state.loading && 
            //  {this.state.articles.map((element)=> this line is used to iterate articles, map is ahigher oreder array method  
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              {/* when we use map it needs a unique key word  */}


            </div>
            
          })}

        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handelPrevOne} className="btn btn-dark"> &larr; previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" onClick={this.handelNextOne} className="btn btn-dark">next &rarr;</button>

        </div>
         */}
      </>
    )
  }
}

export default News
