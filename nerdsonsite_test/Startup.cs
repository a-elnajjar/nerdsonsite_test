using Microsoft.Owin;
using nerdsonsite_test;
using Owin;

[assembly: OwinStartup(typeof (Startup))]

namespace nerdsonsite_test
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}