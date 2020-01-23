import React from 'react';
import styled from 'styled-components';
import CommentIcon from '../../resources/comment-icon.png'



const ContainerPostFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 3;
    grid-row-end: 3;
`  

const Text = styled.p`
    margin: 0 1em;
`


function PostFooter(props) {
    return (
        <ContainerPostFooter onClick={props.onClick}>
            <img src={CommentIcon} alt="Icone de Comentário" width="32px"/>
            <Text>{props.commentCount} Comentários</Text>
        </ContainerPostFooter>
    );
}



export default PostFooter;