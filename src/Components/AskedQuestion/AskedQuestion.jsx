import React, { useEffect, useState } from 'react'
import { Card } from '@material-ui/core';

//React animated expand
import Expand from "react-expand-animated";

//css file
import "./AskedQuestion.css";

function AskedQuestion() {

    /*local array of question*/
    const [Question, setQuestion] = useState([{ question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    { question: "Paint point description and our solution?", show: false },
    ])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <>
            <div className="content_padding">
                <div className="mt-3 mb-2 text-center page_heading">Frequently Asked Question</div>
                <div className="mt-3">

                    {Question.map((item, index) => (
                        <Card
                            className="pt-1 pb-1 Card_shadow mt-2"
                            key={index}
                        >
                            <div className="p-2">
                                <span>
                                    {item.show === false ? (
                                        <span
                                            className="hover_cursor icon_size"
                                            onClick={() => {
                                                Question[
                                                    index
                                                ].show = true;
                                                setQuestion([
                                                    ...Question,
                                                ]);
                                            }}
                                        >
                                            <i class="fa fa-plus-square"></i>
                                        </span>
                                    ) : (
                                        <span
                                            className="hover_cursor icon_size1"
                                            onClick={() => {
                                                Question[
                                                    index
                                                ].show = false;
                                                setQuestion([
                                                    ...Question,
                                                ]);
                                            }}
                                        >
                                            <i className="fa fa-minus-square"></i>
                                        </span>
                                    )}
                                </span>
                                <span className="ml-3 asked_question">
                                    {item.question}
                                </span>

                                <Expand open={item.show}>
                                    <div className="mt-3">

                                        Lorem Ipsum is a fish text often used in print and web design. Lorem Ipsum has been the standard "fish"
                                        for Latin texts since the early 16th century. At the time, an unnamed printer created a large collection of
                                        font sizes and shapes using Lorem Ipsum to print samples. Lorem Ipsum Not only successfully survived
                                        five. Lorem Ipsum is a fish text often used in print and web design.
                                    </div>
                                </Expand>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AskedQuestion;
