import {gql} from "@apollo/client";

export const ALL_CATEGORIES_QUERY = gql`
    query categories {
        categories {
            name,
            classify
        }
    }
`
