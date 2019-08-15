/* use jQuery to add the events to the web page */
$(document).ready(function() {
  let html = "";
  let minPrice = 0;
  let maxPrice = 500;
  // loop through the event array
  $.each(event_array, function(index, item) {
    // add the item and description inside an li into the html string
    html += `<li><span class="event">${item.name} - ${
      item.description
    } </span> <br>
    <span class="date">${item.getDate()}</span> <br>
    <span class="price-search-results">${item.searchTickets(
      minPrice,
      maxPrice
    )}</span><br>
    <span class="cheap-ticket-ad">Cheapest ticket for this event is "${item.findCheapestTicket(
      "cheapest"
    )}"</span></li>`;
  });
  // insert resulting html string into #event
  $("#event").html(html);

  // make minPrice and maxPrice input elements for user
  let minPriceInput = document.createElement("input");
  minPriceInput.type = "number";
  minPriceInput.min = 0;
  minPriceInput.id = "min-price";
  minPriceInput.value = minPrice;

  let maxPriceInput = document.createElement("input");
  maxPriceInput.type = "number";
  maxPriceInput.min = 0;
  maxPriceInput.id = "max-price";
  maxPriceInput.value = maxPrice;

  // make labels for the minPrice and maxPrice elements
  let minLabel = document.createElement("label");
  let maxLabel = document.createElement("label");
  minLabel.htmlFor = "min-price";
  maxLabel.htmlFor = "max-price";
  minLabel.textContent = "Minimum price";
  maxLabel.textContent = "Maximum price";

  // insert inputs for user to specify min and max price
  $("#event").after(minLabel, minPriceInput, maxLabel, maxPriceInput);

  $( function() {
    $( "#datepicker" ).datepicker();
  } );
}); // end jquery