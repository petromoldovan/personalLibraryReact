import { expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import sinon from 'sinon';

import {getOrCreateMountPoint} from '../test-utils';
import LibPage from '../../app/components/pages/LibPage';


const books = [
    {
        author: "Cervantes",
        id: 1,
        title: "Don Quixote",
        year: "1605"
    },
    {
        author: "dummyBook",
        id: 2,
        title: "dummyAuthor",
        year: "2000"
    },
    {
        author: "Samuel L J",
        id: 3,
        title: "Gardians",
        year: "1909"
    }
];

describe('Library page', () => {
    let getUserBooks, page, mountPoint, props;

    beforeEach(() => {
        mountPoint = getOrCreateMountPoint();
        props = {
            books: books,
            selectedBooks: [1,2,3],
            onLoadGetBooks: getUserBooks = sinon.stub()
        };
        const component = <LibPage {...props} />;

        page = ReactDOM.render(component, mountPoint);

        console.log(mountPoint)
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(mountPoint);
    });

    it('is a div', () => {
        expect(ReactDOM.findDOMNode(page).tagName).to.equal('DIV');
    });

    it('is a React component', () => {
        expect(page).to.be.instanceof(React.Component)
    });

    context("renders all companies", ()=>{
        it("checks if all books are rendered", ()=>{
            props.books.forEach((book) => {
                let bookRef = `book_${book.id}`;
                expect(page.refs[bookRef]).to.be.exist;
                expect(page.refs[bookRef].tagName).to.equal('LI');
            });
        })
    })

})