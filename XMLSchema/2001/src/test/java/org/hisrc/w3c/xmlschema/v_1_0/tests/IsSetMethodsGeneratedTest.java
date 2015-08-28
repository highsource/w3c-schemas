package org.hisrc.w3c.xmlschema.v_1_0.tests;

import org.hisrc.w3c.xmlschema.v_1_0.Wildcard;

import org.junit.Assert;
import org.junit.Test;

public class IsSetMethodsGeneratedTest {

    @Test
    public void testIsSet() throws Exception {
        Wildcard wildcard = new Wildcard();
        Assert.assertFalse(wildcard.isSetNamespace());

        wildcard.getNamespace().add("http://www.opengis.net/ows/2.0");
        Assert.assertTrue(wildcard.isSetNamespace());
    }
}
