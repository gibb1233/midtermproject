const Borders = ({ borders }) => (
    <div>
      <h4>Border Countries:</h4>
      {borders?.length ? (
        <ul>
          {borders.map((border, i) => (
            <li key={i}>{border}</li>
          ))}
        </ul>
      ) : (
        <p>No borders</p>
      )}
    </div>
  );
  
  export default Borders;
  