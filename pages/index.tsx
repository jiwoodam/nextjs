//import Error from 'next/error'
import Link from 'next/link'
//import Head from 'next/head'
import styled from 'styled-components';
import {withRouter, WithRouterProps} from 'next/router'
import * as React from "react";

class Index extends React.Component<WithRouterProps, React.ComponentState> {

    // static async getInitialProps({ res, req }) {
    //
    //
    //
    // }

    render(){
        const {router} = this.props;
        console.log(router);

        return(
            <div>
                Hello World.{' '}
                {router.pathname}
                <Link href='/about'>
                    <Move>About</Move>
                </Link>
            </div>
        );
    }
}
export default withRouter(Index);

const Move = styled.a `
    border:1px solid red;
`;