import React from "react";
import "./FeaturedMovie.css";
import AddIcon from '@material-ui/icons/Add';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

export default ({item}) => {

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for(let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let averageVote = item.vote_average
    averageVote = ((averageVote) * 10.0);

    let lengthOverview = item.overview;
    if(lengthOverview.length > 250) {
        lengthOverview = lengthOverview.substring(0, 250 - 3)+"..."
    }

    return (
        <section className="featured" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`}}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original_name}</div>
                    <div className="featured--info">
                        <div className="featured--points">{averageVote + "%"} Match</div>
                        <div className="featured--year">{firstDate.getFullYear()}</div>
                        <div className="featured--seasons">{item.number_of_seasons} Season{item.number_of_seasons !== 1 ? "s" : ""}</div>
                        <div className="featured--description">{lengthOverview}</div>
                        <div className="featured--buttons">
                            <a href={`/watch/${item.id}`} className="featured--watchbutton arrow--icon"><PlayArrowIcon style={{fontSize: 20}}/>Watch</a>
                            <a href={`/list/add/${item.id}`} className="featured--mylist add--icon"><AddIcon style={{fontSize: 20}}/> My list</a>
                        </div>
                        <div className="featured--genres"><strong>Genres</strong>: {genres.join(", ")}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}