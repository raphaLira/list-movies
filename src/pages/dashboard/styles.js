import styled from "styled-components";

export const Container = styled.div`
  h1 {
    text-align: center;
    margin: 4rem 0;
  }
  text-align: center;
  display: grid;
  grid-template-columns: repeat(2);
`;

export const Table = styled.table`
  border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    font-size: 16px;
    font-weight: 400;
    color: #333;
    text-align: left;

    th,
    td {
      padding: 10px;
      border: 1px solid #ccc;
    }

    th {
      background-color: #f2f2f2;
      font-weight: 700;
      text-transform: uppercase;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #ddd;
    }

    h1 {
    text-align: center;
    margin: 4rem 0;
  }
  `;


export const Thead = styled.thead`
color: white;
  align-items: center;
`;



// import styled from "styled-components";

// export const Container = styled.div`
// display: grid;
// /* grid-template-areas: 'sidebar header'
// 'sidebar content'
// 'sidebar footer'; */
// grid-template-columns: repeat(2, 1fr);
// column-gap: 1rem;
// `;

// export const Table = styled.table`
 
//   border-collapse: collapse;
//     width: 100%;
//     max-width: 800px;
//     margin: 0 auto;
//     font-size: 16px;
//     font-weight: 400;
//     color: #333;
//     text-align: right;

//     th,
//     td {
//       padding: 10px;
//       border: 1px solid #ccc;
//     }

//     th {
//       background-color: #f2f2f2;
//       font-weight: 700;
//       text-transform: uppercase;
//     }

//     tr:nth-child(even) {
//       background-color: #f2f2f2;
//     }

//     tr:hover {
//       background-color: #ddd;
//     }

//     h1 {
//     text-align: center;
//     margin: 4rem 0;
//   }
//   `;


// export const Thead = styled.thead`
// color: white;
//   align-items: center;
// `;

// export const Header = styled.div`
//    grid-area: header;
//   grid-template-columns: 1fr 2fr 1fr .5fr;
// `;
// export const Sidebar = styled.div`
//   grid-area: sidebar;
//   background-color: red;
//    align-items: center;
// `;
// export const Content = styled.div`
//   grid-area: content;
//   background-color: blue;
// `;
// export const Footer = styled.div`
//   grid-area: footer;
// `;
