function mapdata() {

  let nodes = [];
  let edges = [];

  // Write your logic here...
  let i,j;
  let matrixSize=2;
  for(i=0; i<matrixSize; i++)
  {
    for(j=0; j<matrixSize; j++)
    {
      nodes.push({"data": {"id":`N${i}-${j}`}});
    }
  }

  for(i=0; i<matrixSize; i++)
  {
    for(j=0; j<matrixSize; j++)
    {
      if(i+1<matrixSize)
      {
        edges.push({"data": {"id": `${i}-${j}S`, "source": `N${i}-${j}`, "target": `N${i+1}-${j}`}});
        if(j+1<matrixSize)
        {
          edges.push({"data": {"id": `${i}-${j}SE`, "source": `N${i}-${j}`, "target": `N${i+1}-${j+1}`}});
        }
        if(j-1>=0)
        {
          edges.push({"data": {"id": `${i}-${j}SW`, "source": `N${i}-${j}`, "target": `N${i+1}-${j-1}`}});
        }
      }
      if(j+1<matrixSize)
      {
        edges.push({"data": {"id": `${i}-${j}E`, "source": `N${i}-${j}`, "target": `N${i}-${j+1}`}});
      }
      if(i-1>=0)
      {
        edges.push({"data": {"id": `${i}-${j}N`, "source": `N${i}-${j}`, "target": `N${i-1}-${j}`}});
        if(j-1>=0)
        {
          edges.push({"data": {"id": `${i}-${j}NW`, "source": `N${i}-${j}`, "target": `N${i-1}-${j-1}`}});
        }
        if(j+1<matrixSize)
        {
          edges.push({"data": {"id": `${i}-${j}NE`, "source": `N${i}-${j}`, "target": `N${i-1}-${j+1}`}});
        }
      }
      if(j-1>=0)
      {
        edges.push({"data": {"id": `${i}-${j}W`, "source": `N${i}-${j}`, "target": `N${i}-${j-1}`}});
      }
    }
  }

  console.log(edges.length);

  elements = {
    nodes,
    edges
  };

  return elements;

}
module.exports.mapdata = mapdata;


