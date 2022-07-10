import Main from "../../components/main";
import Sidebar from "../../components/sidebar";

import * as S from './style.js'

function Netflix() {
    return (
        <>
            <S.Content>
                <Sidebar />
                <Main />
            </S.Content>
        </>
    );
};

export default Netflix;