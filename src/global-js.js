import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    font-size: 10px;
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