import Head from 'next/head';
import Navegacion from "./Navegacion";

const MasterPage = (props) => (
    <div>
        <Head>
            <title>Bitcoin App</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>


        <Navegacion/>
        {props.children}
    </div>
);

export default MasterPage;