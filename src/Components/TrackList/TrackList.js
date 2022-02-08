import React from "react";
import { Track } from "../Track/Track";
import "./TrackList.css";

export class TrackList extends React.Component {
    render() {
        return(
            <div className="TrackList">
                {this.props.tracks.map(track => { return <Track track={track} key={track.id} /> })}
        
                {this.props.track.name}
                {this.props.track.artist}
                {this.props.track.album}

                <Track onAdd={this.props.onAdd} onRemove={this.props.onRemove} isRemove={true}/>
            </div>
        )
    }
}