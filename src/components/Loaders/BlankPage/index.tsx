import { BrokenSpinner } from '../BrokenSpinner';

export const BlankPageLoader: React.FC = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
      }}
    >
      <BrokenSpinner />
    </div>
  );
};
