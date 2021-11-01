import * as React from 'react'
import Layout from "../components/layout"

const langsList = {
    padding: '0',
}

const infoList = {
    color: 'black',
    listStyle: 'square'
}

const lang = {
    color: 'palevioletred',
    listStyle: 'none'
}

const LanguagesPage = () => {
    return (<Layout pageTitle="Languages">
        <ul style={langsList}>
            <li style={lang}>
                <div>
                    <h2>Java</h2>
                    <ul style={infoList}>
                        <li>Initially learned in 2014 (ripe age of 12)</li>
                        <li>Wide understanding of Object Oriented Programming</li>
                        <li>Build System Experience (gradle, maven, ant)</li>
                        <li>Frameworks/Library Knowledge: Guava, Apache Commons, Spring</li>
                    </ul>
                </div>
            </li>
            <li style={lang}>
                <div>
                    <h2>Kotlin</h2>
                    <ul style={infoList}>
                        <li>Initially learned in 2017 (age 15)</li>
                        <li>Watched the status-quo of Kotlin shift</li>
                        <li>Kotlin Gradle build system experience</li>
                    </ul>
                </div>
            </li>
            <li style={lang}>
                <h2>JavaScript</h2>
                <ul style={infoList}>
                    <li>Started learning in 2018 (age 16)</li>
                    <li>Dropped and picked up a couple times, relearning now.</li>
                    <li>Framework Knowledge: Node, React, Gatsby</li>
                </ul>
            </li>
            <li style={lang}>
                <h2>HTML5/CSS</h2>
                <ul style={infoList}>
                    <li>Started learning in 2014 (age 12)</li>
                    <li>Rarely used it much, but able to use it well with a ref guide.</li>
                </ul>
            </li>
        </ul>
    </Layout>)
}

export default LanguagesPage