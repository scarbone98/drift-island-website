import React, {useEffect, useState} from 'react';
import './App.css';
import Container from "./components/Container";
import axios from 'axios';
import Image from './components/Image'

function Body() {

    const [articles, setArticles] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const articles = await axios.get('http://localhost:3000/');
                setArticles(articles.data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
    }, []);

    return (
        <div style={{height: '100%'}}>
            <Container>
                <div style={{width:'70%', marginRight: 50}}>
                    {
                        articles.map(article => {
                            return (
                                <div>
                                    <h2>
                                        {article.title}
                                    </h2>
                                    <Image
                                        src='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/56215521_2230414337034664_3803533581758758912_o.jpg?_nc_cat=105&_nc_oc=AQluk_35Y_nZ47Xqn9wL9SpzEZxMyVugNJqokbsk43xJMSmDj-YRTpafE48WHpNsoO8&_nc_ht=scontent-ort2-1.xx&oh=620abbdebdfe984b3401dcad4541f636&oe=5DA4E805'/>
                                    <div>
                                        {article.body}
                                    </div>
                                    <div style={{
                                        width: '100%',
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        flex: 1,
                                        justifyItems: 'center',
                                        flexDirection:'column',
                                        alignItems:'flex-end'
                                    }}>
                                        <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
                                            <div style={{width: 25, height: 25, marginRight: '0.5rem'}}>
                                                <Image
                                                    src="data:image/jpeg;base64,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"/>
                                            </div>
                                            <span>{article.author.first} {article.author.last}</span>
                                        </div>
                                        <a href="#" style={{ color:'black'}}>Read more >></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{width:'30%', height: 200, backgroundColor:'rgba(239, 30, 31, 0.85)', position:'sticky', top:50}}>
                    SPONSOR BAR
                </div>
            </Container>
        </div>
    )
}

function Header() {
    return (
        <div className="top-bar-container">
            <Container>
                <div className="header">
                    <div>
                        <div style={{width: 40, height: 40}}>
                            <Image
                                src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/12814531_1009590142450429_5918330786591501200_n.jpg?_nc_cat=100&_nc_oc=AQl_efo4sC8Wm11o-gtoa3lnU5gr1MRqHYGW2HtRSIbaEmq8ctoewzdK-OMdxbPUw4o&_nc_ht=scontent-ort2-1.xx&oh=8da685511d4d8afa2b934024b2765eb6&oe=5DAA336A"/>
                        </div>
                    </div>
                    <div className="header-left">
                        <a href="#">About</a>
                        <a href="#">Store</a>
                        <a href="#">Search</a>
                        <a href="#">Join</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

function App() {
    return (
        <div style={{position: 'relative'}}>
            <Header/>
            <Body/>
        </div>
    );
}

export default App;
