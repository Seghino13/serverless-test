const testFunction = async (event, contex) => {
    console.log('victor sapo');
    return {
        statusCode: 200,
        body: JSON.stringify(
          {
            message: 'Test COFACE',
          },
        ),
      };
}

module.exports = {
    testFunction
}