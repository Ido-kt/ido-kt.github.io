import React from "react";
import EngineIssueSuccess from "../../../layout/engineIssueSuccess";

const TableMisuseSuccess = () => {
  const ruleId = "table-misuse";
  const title = `Only elements that function as data tables should be tagged as table`;
  const description = `When a layout table is marked up with HTML elements like <table> or <tr>, or assigned table ARIA roles, screen readers announce a data table structure with rows, columns, and headers, even though the table is only used for page layout.`;
  const helpText = `Avoid using table markup or roles for visual layout. Use CSS for page structure, and if a table must be used for layout, remove semantic roles by adding role="presentation" or role="none".`;
  const bestPractices = [
  "Follow proper HTML semantics",
  "Ensure screen reader compatibility",
  "Test with assistive technologies"
  ];
  const htmlExamples = [
  { filename: "complex data table with lists", content: `<style>
    table {
        display: table;
        border-collapse: collapse;
    }

    th, td {
        display: table-cell;
        padding: 10px;
        border: 1px solid black;
    }
</style>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Images</th>
            <th>Names in Different Languages</th>
            <th>Users Who Liked It</th>
            <th>Price Range</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Pizza</td>
            <td>
                <img src="pizza1.jpg" alt="Pizza 1">
                <img src="pizza2.jpg" alt="Pizza 2">
            </td>
            <td>
                <ul>
                    <li>Pizza</li>
                    <li>Pizza</li>
                    <li>Pizza</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>
                        <img src="user1.jpg" alt="User 1">
                        User 1
                    </li>
                    <li>
                        <img src="user2.jpg" alt="User 2">
                        User 2
                    </li>
                </ul>
            </td>
            <td>\$10 - \$20</td>
        </tr>
        <tr>
            <td>Burger</td>
            <td>
                <img src="burger1.jpg" alt="Burger 1">
                <img src="burger2.jpg" alt="Burger 2">
            </td>
            <td>
                <ul>
                    <li>Burger</li>
                    <li>Burger</li>
                    <li>Burger</li>
                </ul>
            </td>
            <td>
                <ul>
                    <li>
                        <img src="user4.jpg" alt="User 4">
                        User 4
                    </li>
                    <li>
                        <img src="user5.jpg" alt="User 5">
                        User 5
                    </li>
                </ul>
            </td>
            <td>\$5 - \$15</td>
        </tr>
    </tbody>
</table>` },
  { filename: "complex data table", content: `<style>
    table {
        display: table;
        border-collapse: collapse;
    }

    th, td {
        display: table-cell;
        padding: 10px;
        border: 1px solid black;
    }
</style>

<table>
    <thead>
        <tr>
            <th>Experiment ID</th>
            <th>Gene</th>
            <th>Mutation Type</th>
            <th>Location</th>
            <th>Effect</th>
            <th>Severity</th>
            <th>Expression Level</th>
            <th>Sample Size</th>
            <th>Control Group</th>
            <th>Treatment Group</th>
            <th>p-value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>BRCA1</td>
            <td>Missense</td>
            <td>Exon 5</td>
            <td>Protein Dysfunction</td>
            <td>High</td>
            <td>Increased</td>
            <td>100</td>
            <td>50</td>
            <td>50</td>
            <td>0.05</td>
        </tr>
        <tr>
            <td>2</td>
            <td>TP53</td>
            <td>Nonsense</td>
            <td>Exon 3</td>
            <td>Protein Truncation</td>
            <td>Medium</td>
            <td>Decreased</td>
            <td>80</td>
            <td>40</td>
            <td>40</td>
            <td>0.01</td>
        </tr>
        <tr>
            <td>3</td>
            <td>EGFR</td>
            <td>Frameshift</td>
            <td>Exon 19</td>
            <td>Protein Deletion</td>
            <td>Low</td>
            <td>Increased</td>
            <td>120</td>
            <td>60</td>
            <td>60</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>4</td>
            <td>KRAS</td>
            <td>Missense</td>
            <td>Exon 2</td>
            <td>Protein Dysfunction</td>
            <td>High</td>
            <td>Increased</td>
            <td>90</td>
            <td>45</td>
            <td>45</td>
            <td>0.03</td>
        </tr>
        <tr>
            <td>5</td>
            <td>ALK</td>
            <td>Translocation</td>
            <td>Exon 20</td>
            <td>Gene Fusion</td>
            <td>Medium</td>
            <td>Increased</td>
            <td>150</td>
            <td>75</td>
            <td>75</td>
            <td>0.01</td>
        </tr>
        <tr>
            <td>6</td>
            <td>PTEN</td>
            <td>Frameshift</td>
            <td>Exon 8</td>
            <td>Protein Deletion</td>
            <td>Low</td>
            <td>Decreased</td>
            <td>110</td>
            <td>55</td>
            <td>55</td>
            <td>0.04</td>
        </tr>
        <tr>
            <td>7</td>
            <td>RET</td>
            <td>Missense</td>
            <td>Exon 11</td>
            <td>Protein Dysfunction</td>
            <td>High</td>
            <td>Increased</td>
            <td>130</td>
            <td>65</td>
            <td>65</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>8</td>
            <td>BRAF</td>
            <td>Nonsense</td>
            <td>Exon 15</td>
            <td>Protein Truncation</td>
            <td>Medium</td>
            <td>Decreased</td>
            <td>95</td>
            <td>47</td>
            <td>47</td>
            <td>0.03</td>
        </tr>
        <tr>
            <td>9</td>
            <td>MET</td>
            <td>Translocation</td>
            <td>Exon 14</td>
            <td>Gene Fusion</td>
            <td>Low</td>
            <td>Increased</td>
            <td>140</td>
            <td>70</td>
            <td>70</td>
            <td>0.01</td>
        </tr>
        <tr>
            <td>10</td>
            <td>PIK3CA</td>
            <td>Missense</td>
            <td>Exon 10</td>
            <td>Protein Dysfunction</td>
            <td>High</td>
            <td>Increased</td>
            <td>100</td>
            <td>50</td>
            <td>50</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>11</td>
            <td>NRAS</td>
            <td>Missense</td>
            <td>Exon 3</td>
            <td>Protein Dysfunction</td>
            <td>Medium</td>
            <td>Increased</td>
            <td>120</td>
            <td>60</td>
            <td>60</td>
            <td>0.03</td>
        </tr>
        <tr>
            <td>12</td>
            <td>SMAD4</td>
            <td>Nonsense</td>
            <td>Exon 8</td>
            <td>Protein Truncation</td>
            <td>Low</td>
            <td>Decreased</td>
            <td>80</td>
            <td>40</td>
            <td>40</td>
            <td>0.04</td>
        </tr>
        <tr>
            <td>13</td>
            <td>NOTCH1</td>
            <td>Frameshift</td>
            <td>Exon 34</td>
            <td>Protein Deletion</td>
            <td>High</td>
            <td>Increased</td>
            <td>130</td>
            <td>65</td>
            <td>65</td>
            <td>0.02</td>
        </tr>
        <tr>
            <td>14</td>
            <td>PTPN11</td>
            <td>Missense</td>
            <td>Exon 3</td>
            <td>Protein Dysfunction</td>
            <td>Medium</td>
            <td>Increased</td>
            <td>110</td>
            <td>55</td>
            <td>55</td>
            <td>0.03</td>
        </tr>
    </tbody>
</table>` }
  ];

  return (
    <EngineIssueSuccess
      ruleId={ruleId}
      title={title}
      description={description}
      helpText={helpText}
      bestPractices={bestPractices}
      htmlExamples={htmlExamples}
    />
  );
};

export default TableMisuseSuccess;
