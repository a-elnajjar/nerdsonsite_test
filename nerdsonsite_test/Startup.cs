using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(nerdsonsite_test.Startup))]
namespace nerdsonsite_test
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
