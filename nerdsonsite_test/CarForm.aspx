<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="CarForm.aspx.cs" Inherits="nerdsonsite_test.CarForm" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    
    
    <h2>Car Edit</h2>
            <div class="row">
                <div class="col-lg-12">
                    <div class="form-horizontal"> 
                    
                        <fieldset>

                            <div class="form-group">
                                <label for="carManufacturer" class="col-sm-2 control-label">Manufacturer</label>

                                <div class="col-sm-5">
                                    <input type="text" id="carManufacturer" name="carManufacturer" class="form-control" required />
                                </div>
                            </div>
                            <!-- /carManufacturer -->
                            <div class="form-group">
                                <label for="carMake" class="col-sm-2 control-label">Make</label>
                                <div class="col-sm-5">
                                    <input type="text" id="carMake" name="carMake" class="form-control" required />
                                </div>
                            </div>
                            <!-- /carMake -->

                            <div class="form-group">
                                <label for="carYear" class="col-sm-2 control-label">Year</label>

                                <div class="col-sm-5">
                                    <select id="carYear" name="carYear" class="form-control">
                                        <option value="">Select Year</option>
                                    </select>
                                </div>
                            </div>
                            <!-- /carYear -->


                            <div class="form-group">
                                <label for="carColour" class="col-sm-2 control-label">Colour</label>

                                <div class="col-sm-5">
                                    <input type="text" id="carColour" name="carColour" class="form-control"  />
                                </div>
                            </div>
                            <!-- /carManufacturer -->


                            <div class="form-group">
                                <label for="passengerSeating" class="col-sm-2 control-label">Passenger Seating</label>

                                <div class="col-sm-5">
                                    <select id="passengerSeating" name="passengerSeating" class="form-control">
                                        <option value="">Select number passenger Seating</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>
                        <br />
                        
                        <div><p class="bg-info">Click Cancel button to return to  list of Cars </p></div>
                        <div class="col-sm-offset-2 col-sm-10">
                            <input type="button" id="cancel" class="btn btn-default" value="Cancel" />
                            <input type="submit" id="submit" class="btn btn-primary" value="Submit" />
                            <input type="submit" id="update" class="btn btn-primary" value="Update" />
                            <input type="reset" id="reset" class="btn btn-warning" value="Reset" />
                        </div>
                        <!-- /buttons -->
                    <%--</form>--%>
                        </div>
                    <!-- /form -->
                </div>
                <!-- /col-lg-12 -->
            </div>
            <!-- /row -->
</asp:Content>
