import React, { useEffect } from 'react'
import "./UserCommunication.css";
import { Grid } from '@material-ui/core';
import AllMessages from './AllMessages';
import ImportantMessage from './ImportantMessage';
import ReadMessage from './ReadMessage';
import UnreadMessages from './UnreadMessages';
import DeletedMessages from './DeletedMessages';

function UserCommunication(props) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_margin mb-5">
                <Grid className="Component_main_grid mt-2 p-3">
                    <Grid item md={3}>
                        <div className="mb-3"><strong>My Messages</strong></div>
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" data-toggle="tab" href="#allmessage" role="tab" aria-controls="allmessage"><i class="fa fa-folder-open mr-2"></i>All Messages</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#important" role="tab" aria-controls="important"><i class="fa fa-star mr-2"></i>Important</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#read" role="tab" aria-controls="read"><i class="fa fa-envelope mr-2"></i>Read</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#unread" role="tab" aria-controls="unread"><i class="fa fa-envelope mr-2"></i>Unread</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" data-toggle="tab" href="#deleted" role="tab" aria-controls="deleted"><i class="fa fa-trash mr-2"></i>Deleted</a>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item md={9}>
                        <div className="tab-content">
                            {/* all Message */}
                            <div className="tab-pane active" id="allmessage" role="tabpanel">
                                <AllMessages />
                            </div>


                            {/* important message */}
                            <div className="tab-pane" id="important" role="tabpanel">
                                <ImportantMessage />
                            </div>

                            {/* read messages */}
                            <div className="tab-pane" id="read" role="tabpanel">
                                <ReadMessage />
                            </div>

                            {/* unread messages */}
                            <div className="tab-pane" id="unread" role="tabpanel">
                                <UnreadMessages />
                            </div>

                            {/* deleted messages */}
                            <div className="tab-pane" id="deleted" role="tabpanel">
                                <DeletedMessages />
                            </div>
                        </div>
                    </Grid>
                </Grid>

            </div>
        </>
    )
}

export default UserCommunication;
