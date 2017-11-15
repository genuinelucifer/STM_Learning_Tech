package mytry.jetty;

import java.io.*;
import org.eclipse.jetty.client.HttpClient;
import org.eclipse.jetty.client.HttpClientTransport;
import org.eclipse.jetty.client.api.ContentResponse;
import org.eclipse.jetty.http2.client.HTTP2Client;
import org.eclipse.jetty.http2.client.http.HttpClientTransportOverHTTP2;
import org.eclipse.jetty.util.ssl.SslContextFactory;

public class JettyTry
{public static final String KEYSTORE = new File ("JGet.jks").getAbsolutePath();
   public static final String STOREPASS = "welcome1";
   public static void main(String arg[]) throws Exception
   {// enableSSLDebug ();
      SslContextFactory sslContextFactory = getSSLContextFactory ();
      HttpClient httpClient = null;
      ContentResponse response = null;try
      {
         HttpClientTransport trasport = new HttpClientTransportOverHTTP2(new HTTP2Client());
         httpClient = new HttpClient(trasport, sslContextFactory);
         httpClient.start();
         response = httpClient.GET("https://localhost:8383/MyApp/Snoop.jsp");System.out.println(response.getRequest().getURI() + " : " +  
                            response.getVersion());
         response = httpClient.GET("http://localhost:8282/MyApp/Snoop.jsp");System.out.println(response.getRequest().getURI() + " : " +  
                            response.getVersion());
      }catch (Exception e)
      {
         e.printStackTrace();
      }finally
      {
         httpClient.stop();
      }
   }
   /**
    * Enable SSL Debug
    */private static void enableSSLDebug ()
   {System.setProperty("javax.net.debug", "ssl");
   }
   /**
    * Configure custom keystore and return the context factory object.
    */private static SslContextFactory getSSLContextFactory () throws Exception
   {
      SslContextFactory sslContextFactory = new SslContextFactory();try
      {
         sslContextFactory.setNeedClientAuth(false);
         sslContextFactory.setKeyStorePath(new File (KEYSTORE).getAbsolutePath());
         sslContextFactory.setKeyStorePassword (STOREPASS);
         sslContextFactory.setKeyStoreType("JKS");
         sslContextFactory.setTrustStorePath(new File (KEYSTORE).getAbsolutePath());
         sslContextFactory.setTrustStorePassword(STOREPASS);
         sslContextFactory.setTrustStoreType("JKS");
         sslContextFactory.setKeyManagerPassword(STOREPASS);
      }catch (Exception e)
      {
         e.printStackTrace();
      }      return sslContextFactory;
   } 
}
