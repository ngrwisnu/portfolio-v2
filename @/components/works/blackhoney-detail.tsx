const detail = (
  <>
    <h5 className="mb-1">
      <strong>Goals</strong>
    </h5>
    <div className="flex flex-col gap-4">
      <p>There are two main problems that the new website wants to resolve:</p>
      <ol start={1} className="flex list-inside list-decimal flex-col gap-2">
        <li>
          <strong>
            The user contacts with the seller to ask the product&apos;s stock.
          </strong>
          This can be a problem for the seller because it can be time-consuming
          to answer all of the customer&apos;s questions individually.
          Additionally, it can be difficult to keep track of inventory levels in
          real time
        </li>
        <li>
          <strong>
            The user asks for the product&apos;s price after asking the stock.
          </strong>
          This can be another problem for the seller because it can be
          time-consuming to answer the customer&apos;s questions individually.
        </li>
      </ol>
      <p>
        These problems can lead to a frustrating experience for both the
        customer and the seller. The customer may have to wait a long time for
        answers to their questions. The seller may have to spend a lot of time
        answering customer questions.
      </p>
      <p>
        The new website of Black Honey can solve these problems by providing a
        self-service experience for customers. Customers can use the website to
        check the stock and price of products on their own time, without having
        to chat with a seller.
      </p>
    </div>
  </>
);

export default detail;
