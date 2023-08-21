import { TableCell, TableHead, TableRow } from '@mui/material';

type CalculationHeaderProps = {
  headNames: string[];
};

export default function CalculationHeader({ headNames }: CalculationHeaderProps) {
  return (
    <TableHead>
      <TableRow>
        {headNames.map(name => (
          <TableCell
            key={name}
            sx={{
              fontWeight: 'bold',
              borderBottom: '2px solid black',
              textAlign: 'center',
            }}
          >
            {name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
