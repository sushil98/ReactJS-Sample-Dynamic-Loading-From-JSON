import { GraphQLClient } from 'graphql-request';
import { URL } from '../constant/apiConstant';

/* global fetch */
export function getClient() {
    return new GraphQLClient("http://localhost:4000/graphql");
}

