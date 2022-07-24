import {gql} from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
    query products {
        products {
            name,
            description,
            createdAt,
            price
        }
    }
`
