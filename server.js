// import your dependencies
const express = require( 'express' );

// create your handlers
const app = express();

// assign your middleware
app.get( '/api', ( req, res, next ) =>
{ 
    const { slack_name, track } = req.params;

    const currentDay = new Date().getDay();
    const utcTime = new Date();

    return res.status( 200 ).json( {
        "slack_name": slack_name,
        "current_day": currentDay,
        "track": track,
        "utc_time": utcTime,
        "github_file_url": "",
        "github_repo_url": "",
    } );
} );

// start the server