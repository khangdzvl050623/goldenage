import React from 'react';
import { ExchangeRateTable, GoldPriceTable } from './CombinedTableContent';

const CombinedTable = () => {
  return (
    <>
      <ExchangeRateTable />
      <GoldPriceTable />
    </>
  );
};

export default CombinedTable;
