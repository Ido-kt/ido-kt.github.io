import React from "react";
import IssueFailure from "../../../../../layout/issueFailure";

const itemDescription = "Tables : Nested Tables - Failure";

export default () => (
  <IssueFailure
    itemContent={
      <>
        <div className="list-item" id="nested-tables-failure-1">
          <table>
            <caption>Course Details</caption>
            <thead>
              <tr>
                <th>Course Name</th>
                <th>Instructor</th>
                <th>Schedule</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Math 101</td>
                <td>Dr. Green</td>
                <td>
                  <table>
                    <thead>
                      <tr>
                        <th>Day</th>
                        <th>Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>10 AM</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr />
        <div className="list-item" id="nested-tables-failure-2">
          <table>
            <caption>Product Inventory</caption>
            <thead>
              <tr>
                <th>
                  <table>
                    <thead>
                      <tr>
                        <th>Category</th>
                      </tr>
                    </thead>
                  </table>
                </th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Electronics</td>
                <td>50</td>
                <td>$500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />  
        <div className="list-item" id="nested-tables-failure-3">
          <table>
            <caption>Performance Metrics</caption>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sales</td>
                <td>
                  <table>
                    <thead>
                      <tr>
                        <th>Region</th>
                        <th>Sales</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>North</td>
                        <td>5000</td>
                      </tr>
                    </tbody>
                  </table>
                  <table>
                    <thead>
                      <tr>
                        <th>Region</th>
                        <th>Returns</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>North</td>
                        <td>50</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />  
        <div className="list-item" id="nested-tables-failure-6">
          <table>
            <caption>Project Overview</caption>
            <thead>
              <tr>
                <th>Project</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Website Redesign</td>
                <td>
                  <table>
                    <thead>
                      <tr>
                        <th>Phase</th>
                        <th>Task</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Planning</td>
                        <td>
                          <table>
                            <thead>
                              <tr>
                                <th>Task Name</th>
                                <th>Deadline</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Wireframes</td>
                                <td>March 5</td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <hr />
        
      </>
    }
    itemDescription={itemDescription}
  />
);