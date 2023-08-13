import WebBanner from '../../components/banner/WebBanner';
import { useTable } from 'react-table';
import { styled } from "styled-components";

export default function OrderMange() {
  const headers = [
    {
      Header: '주문번호',
      accessor: 'orderNumber',
    },
    {
      Header: '상품명',
      accessor: 'productName',
    },
    {
      Header: '옵션',
      accessor: 'option',
    },
    {
      Header: '수량',
      accessor: 'count',
    },
    {
      Header: '판매가',
      accessor: 'price',
    },
    {
      Header: '배송비',
      accessor: 'delivery',
    },
    {
      Header: '주문상태',
      accessor: 'orderStatus',
    },
  ];

  const listData = [
    {
      orderNumber: "45324",
      productName: "스트라이프 맨투맨",
      option: "블루 / M",
      count: 1,
      price: "30,000",
      delivery: "2,500",
      orderStatus: "주문확인",
    },
    {
      orderNumber: "45324",
      productName: "스트라이프 맨투맨",
      option: "블루 / M",
      count: 1,
      price: "30,000",
      delivery: "2,500",
      orderStatus: "배송준비중",
    },
    {
      orderNumber: "45324",
      productName: "스트라이프 맨투맨",
      option: "블루 / M",
      count: 1,
      price: "30,000",
      delivery: "2,500",
      orderStatus: "배송중",
    },
  ];

  const headerKey = headers.map((header) => header.accessor);

  return (
    <OrderMangeWrapper>
      <WebBanner text="주문관리" subText="마이페이지 > 주문관리" />
      <OrderlistWrapper>
        <h1 style={{ marginLeft: "4rem" }}>주문관리</h1>
        <Table>
          <thead>
            {
              headers.map((header) =>
                <TableHeader key={header.Header}>{header.Header}</TableHeader>
              )
            }
          </thead>
          <tbody>
            {
              listData.map((item, index) => (
                <TableRow key={index}>
                { 
                  headerKey.map((key) => 
                    <TableData key={key + index}>{item[key]}</TableData>
                  )
                }
                </TableRow>
              ))
            }
          </tbody>
        </Table>
      </OrderlistWrapper>
    </OrderMangeWrapper>
  );
}

const OrderMangeWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const OrderlistWrapper = styled.div`
  margin: 8rem 5rem;

  h1 {
    ${(props) => props.theme.fontStyles.title}
    justify-content: flex-start;
  }

  span {
    ${(props) => props.theme.fontStyles.text}
  }

`;

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 5rem 0 0 0;
  ${(props) => props.theme.fontStyles.text}
`;

const TableHeader = styled.th`
  height: 8rem;
  border-bottom: solid 0.15rem #e8e8e8;
`;

const TableRow = styled.tr`
  height: 8rem;
  
  &:last-child {
    border-right: none;
  }
`;

const TableData = styled.td`

`;

