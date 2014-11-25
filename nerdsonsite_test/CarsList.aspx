<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="CarsList.aspx.cs" Inherits="nerdsonsite_test.CarsList" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">


    <h2>Cars List </h2>

    <div id="carslist" class="table-responsive">
        <table id="jsontable" class="table " cellspacing="0" width="100%">
            <thead>
                <tr>
                    <th>Delate/Edit</th>
                    <th>ID</th>
                    <th>Manufacturer </th>
                    <th>Make </th>
                    <th>Year </th>
                    <th>Colour </th>
                    <th>passenger seating</th>
                </tr>
            </thead>
            <tfoot>
                <tr>
                    <th>Delate/Edit</th>
                    <th>ID</th>
                    <th>Manufacturer </th>
                    <th>Make </th>
                    <th>Year </th>
                    <th>Colour </th>
                    <th>passenger seating</th>
                </tr>
            </tfoot>
        </table>
    </div>
      <div>
        <a href="/CarForm.aspx" class="btn btn-default"  role="button">Add Car</a>
    </div>
</asp:Content>
