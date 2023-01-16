export const TABLE_COLUMN_NAMES = [
  'Name',
  'Status',
  'Role',
  'Last Login'
]

export const GRID_COLUMNS_DIVISION = '6fr 1fr 1fr 1fr .5fr .5fr'

export const TABLE_ROW_STYLES = {
  display: 'grid',
  gridTemplateColumns: GRID_COLUMNS_DIVISION,
  gap: '2px',
  alignItems: 'center',
  justifyItems: 'start',
  border: '1px solid #dbdbd8',
  borderRadius:'10px',
  padding:'6px',
  marginBottom: '5px'
}

export const TABLE_COLUMN_STYLES = {
  display: 'grid',
  gridTemplateColumns: GRID_COLUMNS_DIVISION,
  minWidth: '100%'
}