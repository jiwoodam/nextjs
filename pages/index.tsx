import Link from 'next/link'
import styled from 'styled-components';

export default () =>
    <div>
        Hello World.{' '}
        <Link href="/about">
            <Links>About</Links>
        </Link>
    </div>


const Links = styled.a `
    border:1px solid red;
`;